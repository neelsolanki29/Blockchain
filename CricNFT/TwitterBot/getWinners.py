from glob import glob
from random import shuffle

import requests

coupon_codes = [
    'mlbookcamp-1',
    'mlbookcamp-2',
    'mlbookcamp-3',
    'mlbookcamp-4',
    'mlbookcamp-5',
    'mlbookcamp-6',
    'mlbookcamp-7',
    'mlbookcamp-8',
]

top = 1  # len(coupon_codes)


def returnLimit():
    return top


def randomGiveaway(TWEET_ID, OWNER_NAME):
    tweet_id = TWEET_ID
    handle = OWNER_NAME

    key = '5Epf86Accj4eGvSIgPw48mkqg'
    secret = 'j0yOdPBDrP5OJxrF6ULBSaXhKxSHig0xAVu72BA8HuBruWaZZt'

    auth_url = "https://api.twitter.com/oauth2/token"
    data = {'grant_type': 'client_credentials'}
    auth_resp = requests.post(auth_url, auth=(key, secret), data=data)
    token = auth_resp.json()['access_token']

    headers = {'Authorization': 'Bearer %s' % token}

    # get followers

    all_followers = set()

    next_cursor = -1

    while next_cursor != 0:
        followers_url = 'https://api.twitter.com/1.1/followers/ids.json?cursor=%s&' + \
            'screen_name=%s&count=5000'
        followers_url = followers_url % (next_cursor, handle)

        followers_resp = requests.get(followers_url, headers=headers).json()
        followers_list = followers_resp['ids']

        all_followers.update(followers_list)
        print('num_followers', len(all_followers))

        next_cursor = followers_resp['next_cursor']
        print('next_cursor =', next_cursor)

    # get retweeters

    retweeter_files = sorted(glob('retweeters-ids-%s.txt' % tweet_id))
    all_retweeters = {}

    with open('retweeters-ids-%s.txt' % tweet_id, 'r') as f_in:
        for line in f_in:
            screen_name, user_id = line.strip().split(',')
            user_id = int(user_id)
            all_retweeters[user_id] = screen_name

        print('num_retweeters', len(all_retweeters))

    # selecting winners
    valid = list(all_retweeters.values())
    shuffle(valid)

    ids = list(all_retweeters.keys())
    # winners_ids = valid[:top]
    # winners = [all_retweeters[i] for i in winners_ids]

    # print('winners:')
    # for i in winners:
    #     print('@%s' % i)

    template = """
    Hi @{name},\nThank you for participating in the giveaway of CricShot.\nTo get the NFT\n1) Make your metamask wallet\n2) Go to your Metamask wallet\n3) Set to Mumbai Testnet in your Metamask Wallet\n4) Send your Metamask Wallet address in this chat like this (#EthAddress):\ne.g. #0x0e1aFDCD7BCa770aD9DD17d04c6F82816B156D47\nI hope you find it useful!\nPlease get in touch if you have any questions.\n\nFrom,\nCricShot.
    """.strip()

    # print('messages:')

    # for n in winners:
    #     message = template.format(name=n)

    #     print()
    #     print(message)
    #     print()
    #     print()

    return valid, ids, template
