import React, { Component, useState, useRef, useEffect } from 'react';
import {Jumbotron, Container,Card, CardColumns, Button, Row,Col,Form, ListGroup, Table} from 'react-bootstrap';
import { toast } from 'react-toastify';
import QrReader from 'react-qr-reader';
import { SUPPLYCHAIN_CONTRACT_DEPLOY_ADDRESS } from '../repository/address';
import { SUPPLYCHAIN_CONTRACT_ABI } from '../repository/supplychain';
import '../Styles/Consumer.css';
import Navbar from './Navbar';


const Consumer = ({accountObject,web3Object,supplychainContract}) => { 
    let web3 = web3Object;
    const qrRef = useRef(null);
    const [medname, setmedname] = useState('');
    const [batchdoc, setbatchdoc] = useState('');
    const [addr, setaddr] = useState('');
    const [position, setposition] = useState('');
    const [datetime, setdatetime] = useState('');
    const [verifycount, setverifycount] = useState('');
    const [vermap, setvermap] = useState({data: []});
    const [batch, setBatchCode] = useState('');
    const [scanResultFile, setScanResultFile] = useState('');
    const [scanResultWebCam, setScanResultWebCam] =  useState('');
    const [selectedOpt,setSelectedOpt] = useState('');

    toast.configure();

    async function handleSubmit(event) {
        //alert(batch);
        console.log(supplychainContract);
        var basedata = await supplychainContract.methods.batch(batch).call();
        console.log(basedata);
        setmedname(basedata["0"]);
        setdatetime(basedata["1"]);
        setbatchdoc(basedata["2"]);
        let count = basedata["3"];
        let verification = vermap.data;


        if(count<=0){
            console.log("Inside that oops part");
            toast("This is not a verified medicine!");
        }
        else{
            for(var i = count - 1 ;i>=0; i--){
                console.log("Counter from loop: ", i);
                var data = await supplychainContract.methods.viewverifiedData(batch,i).call();
                console.log(data);
                verification.push({
                    Position: data["0"],
                    Address: data["1"],
                    Date: new Date(data["2"] * 1000).toLocaleString(),
                    VerificationStatus: data["3"]
                })
            }
        setvermap({data:verification});
        }
        }
        const handleErrorFile = (error) => {
            console.log(error);
        }
        const handleScanFile = (result) => {
            if (result) {
                setScanResultFile(result);
                
            }
        }
      const onScanFile = () => {
        qrRef.current.openImageDialog();
      }
      const handleErrorWebCam = (error) => {
        console.log(error);
      }
      const handleScanWebCam = (result) => {
        if (result){
            setScanResultWebCam(result);
            console.log(result);   
        }
    }

   
    return (
        <>
        <Navbar />
        <div className="consumer">
            <h1>Consumer</h1>
            <p>
                Scan the QR code to get the batch code of your medicine and then enter the code to get the verification details. 
            </p>
            
           <div className="mt-4">
           
           <Form.Group className="mb-4" controlId="formBasicPassword">
                <Form.Select aria-label="Default select example" onChange={(e) => {setSelectedOpt(e.target.value);}}>
                    <option selected disabled>Choose an option to scan QR</option>
                    <option value="file">Scan via file browser</option>
                    <option value="webcam">Scan Via Web Cam</option>
                </Form.Select>

                <div style={{display: selectedOpt == "webcam" ? "block" : "none"}}>
                    <QrReader delay={300} style={{width: '15%'}} onError={handleErrorWebCam} onScan={handleScanWebCam} />
                        <h5 className="mt-2">Scanned Code : {scanResultWebCam}</h5>
                </div>
   
                <div style={{display: selectedOpt == "file" ? "block" : "none"}}>
                    <Button className="mt-3 mb-3 " style={{background:"#5840ba"}} onClick={onScanFile}>Scan QR code</Button>
                    <QrReader ref={qrRef} delay={300} style={{width: '15%'}} onError={handleErrorFile} onScan={handleScanFile} legacyMode />
                        <h5 className="mt-2">Scanned Code: {scanResultFile}</h5>
                </div>

            </Form.Group>
            <br />
           <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control type="text" placeholder="Enter the scanned batch code" onChange={(e) => { setBatchCode(e.target.value)}}/>
            </Form.Group>
            <div style = {{display:'flex', justifyContent: 'space-between'}}>
                <Button style={{background:"#5840ba"}} onClick={handleSubmit}>Submit</Button>
                <Button variant="secondary" onClick={() => {window.location.reload()}}>Reset</Button>
            </div>

            </div>
                <div className="mt-3"> 
                    {medname? <h4>Medicine Name : {medname}</h4> : null}
                    {batchdoc? <h4>Batch Doc : <a href={"https://ipfs.infura.io/ipfs/"+ batchdoc} target="_blank">Link</a></h4> : null}
               {medname? <MapComponent Mapdata={vermap}/> : null}
               </div> 
        </div>
        </>
    )
}



export default Consumer;



const MapComponent = ({Mapdata}) => {
    return(    
           
               <div>
                {Mapdata["data"].map(el => (
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Position</th>
                                <th>Address</th>
                                <th>Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{el.Position}</td>
                                <td>{el.Address}</td>
                                <td>{el.Date}</td>
                            </tr>
                        </tbody>
                    </Table>
                ))}
            </div>
    )
}

