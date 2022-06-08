#from TwitterBot.retweetersScript import retweetersScraping

import tweepy
import time
import subprocess
import os
import csv
import random
import OpenSeaFetcher
#import RaribleFetcher

from keys import *
import retweetersScript
import getWinners
import VRFWeb3

auth = tweepy.OAuthHandler(CONSUMER_KEY, CONSUMER_SECRET)
auth.set_access_token(ACCESS_KEY, ACCESS_SECRET)
api = tweepy.API(auth)

# Change the Owner Name here in order to get admin access and privileges
OWNER_NAME = "AnnouncerCric"
GIVEAWAY_DATABASE = []
noOfRetweeters = int()
# =====================================================================


# NFT Tweet Generation

def NFTTweet(trade):
    token_id_of_nft_parser = '#'
    asset_contract_address_of_nft_parser = '!'
    keywords = [str(x) for x in trade.split(" ")]
    token_id_of_nft = [
        tweet for tweet in keywords if token_id_of_nft_parser == tweet[0]]
    asset_contract_address_of_nft = [
        tweet for tweet in keywords if asset_contract_address_of_nft_parser == tweet[0]]
    if "opensea" in keywords:
        platform = 'opensea'
        nftName, NFTLink = OpenSeaFetcher.OpenSeaFetchingSchema(
            token_id_of_nft[0][1:], asset_contract_address_of_nft[0][1:])
        linkToNFT = "" + str(NFTLink)
        message = "Hello Fam!\nWe have minted yet another NFT named @" + \
            str(nftName) + ". Go check it out at " + \
            str(platform.title()) + " with this link\n" + str(linkToNFT)

    # elif "rarible" in keywords:
    #     platform = 'rarible'
    #     NFTLink = RaribleFetcher.RaribleFetchingSchema(token_id_of_nft[0][1:])
    #     linkToNFT = "" + str(NFTLink)
    #     message = "Hello Fam!\nWe have minted yet another NFT. Go check it out at " + \
    #         str(platform.title()) + " with this link\n" + str(linkToNFT)

    return message


# NFT BROWNIE SCRIPTS DEPLOYMENT

# def Activator():
#     subprocess.Popen("pushd ./contracts/chainlink/scripts", shell=True)
#     subprocess.Popen(
#         "brownie run ./vrf_scripts/deploy_vrf.py  --network kovan", shell=True)
#     time.sleep(100)
#     subprocess.Popen(
#         "brownie run ./vrf_scripts/fund_vrf.py  --network kovan", shell=True)
#     time.sleep(100)
#     subprocess.Popen(
#         "brownie run  ./vrf_scripts/request_randomness.py  --network kovan", shell=True)
#     time.sleep(100)
#     subprocess.Popen(
#         "brownie run  ./vrf_scripts/read_random_number.py  --network kovan", shell=True)

# NFT Giving Random Giveaway


def import_csv(csvfilename):
    data = []
    with open(csvfilename, "r", encoding="utf-8", errors="ignore") as scraped:
        reader = csv.reader(scraped, delimiter=',')
        row_index = 0
        for row in reader:
            if row:
                row_index += 1
                columns = [row[0]]
                data.append(columns)
    return data


def ProcessingRandomness(Tweet_ID):
    global noOfRetweeters
    Limit = getWinners.returnLimit()
    cumulativeRandomness = import_csv(
        'RandomnessSheet.csv')  # fetch from web3py
    latestRandomness = cumulativeRandomness[-1]
    ranD = int(latestRandomness[0])
    quot = ranD % noOfRetweeters

    return quot
    # return cumulativeRandomness


# NFT Tweet Reply
FILE_NAME = './TwitterBot/LastSeenId.txt'


def retrieveLastSeenId(file_name):
    f_read = open(file_name, 'r')
    lastSeenId = int(f_read.read().strip())
    f_read.close()
    return lastSeenId


def storeLastSeenId(lastSeenId, file_name):
    f_write = open(file_name, 'w')
    f_write.write(str(lastSeenId))
    f_write.close()
    return


def replyToTweets():
    global noOfRetweeters
    print('CricShot is up and running...', flush=True)

    lastSeenId = retrieveLastSeenId(FILE_NAME)

    mentions = api.mentions_timeline(lastSeenId, tweet_mode='extended')
    for mention in reversed(mentions):
        print(str(mention.id) + ' - ' + mention.full_text, flush=True)
        lastSeenId = mention.id
        storeLastSeenId(lastSeenId, FILE_NAME)
#         NFTfetcher = OpenSeaFetcher.OpenSeaFetchingSchema(
#             "2", "0x7c3a306e7e2adbc918ec8777d12335045471b110")
#         api.update_status(status=NFTfetcher)
    # if 'publicize' in mention.full_text.lower():
    #     msg = NFTTweet(mention.full_text.lower())
    #     api.update_status(msg, mention.id)
        if (('giveaway' or '#giveaway') or ('chainlink' and ('giveaway' or '#giveaway'))) in mention.full_text.lower():
            print('found Giveaway Thread!', flush=True)
            if mention.user.screen_name == OWNER_NAME:
                print('connecting to the giveaway thread...', flush=True)
                VRFWeb3.getRandomNumber()
                # ADD ACTIVATOR PYTHON SCRIPT
                # Activator()

                tweet = mention.full_text.lower()
                subHash = '#'
                giveawayLimit = '!'
                keywords = [str(x) for x in tweet.split(" ")]
                thread = [tweet for tweet in keywords if subHash in tweet]
                Alert = [tweet for tweet in keywords if giveawayLimit in tweet]
                print(thread[0][1:-1])
                noOfRetweeters = retweetersScript.retweetersScraping(
                    thread[0][1:])
                Validators, Identity, Template = getWinners.randomGiveaway(
                    thread[0][1:], OWNER_NAME)

                winners_indx = ProcessingRandomness(int(mention.id))
                GIVEAWAY_DATABASE.append(thread[0][1:])
                lis = ''
                # for i in range(0, len(winners_indx)):
                # processingrandomness web3py, fetch a number in int
                lis = str(Validators[int(winners_indx)])
                userID = api.get_user(lis)
                api.send_direct_message(userID.id_str, Template.format(
                    name=Validators[int(winners_indx)]))
                api.update_status("Hey @" + mention.user.screen_name + ",\nWinner of today's giveaway is @" +
                                  lis + ".\nDMs to avail the NFT will be sent to the winner.", mention.id)
                api.create_favorite(mention.id)

            else:
                print('Authorization failed, ' + mention.user.screen_name +
                      ' does not have the necesarry credentials to activate the giveaway.', flush=True)
                api.update_status('Hey @' + mention.user.screen_name + ", unfortunately you don't have the credentials to activate a giveaway. I would recommend you to join ChainLink to use this.\n P.S. I really appreciate you tagging me, thanks. Let me know if I can help you with anything else.", mention.id)
                api.create_favorite(mention.id)


# NFT DM Reply

# def NFTDMReply(receiverID, receiverName):
#     if 'Hi' in mention.full_text.lower():
#         message = 'Hey' + receiverName + \
#             ',\ncheck this NFT out. It is one of the latest most liked NFT present on top NFT marketplaces.\n' + 'Check it out on:'
#         api.send_direct_message(receiverID, message)


# Script Runner
# Uncomment this only when you have to perform the giveaway
# while True:
#     replyToTweets()
#     n = random.randint(1, 10)
#     time.sleep(n)

# call this only when not performing any giveaways
NFTfetcher = OpenSeaFetcher.OpenSeaFetchingSchema(7)

# When you have to tweet about the new giveaway uncomment this
api.update_with_media("pic1.jpg", status="Hey All, Participate to our latest NFT Giveaway!! " +
                      "Jadeja's phenomenal wicket of ABD!" + "\nTo participate, all you have to retweet this tweet and follow our account!")

# When a new NFT is minted, to tweet uncomment this
# api.update_with_media(
#     "pic1.jpg", status="Hey All, checkout our latest NFT, " + NFTfetcher + "\nBuy it now on OpenSea \nLink: https://testnets.opensea.io/assets/mumbai/0xec51debc1a239389dc82e475f39787d9e31d2df5/6")
