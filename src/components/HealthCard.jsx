import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


export const HealthCard = (props) => {
  // const [isPlant,setisPlant]=useState("Loading")

  // useEffect(()=>{
  //   if(props.data.is_plant){
  //     setisPlant(props)
  //   }
  // },[props.data])

  return (
    <Modal
    show={props.show} 
    onHide={props.onHide}
    size="s"
    aria-labelledby="contained-modal-title-vcenter"
    centered
  >
    { (props.data.is_plant) ?(<><Modal.Header closeButton>
    <Modal.Title id="contained-modal-title-vcenter">
     {(props.data.health_assessment.is_healthy )?"Your plant is healthy (test accuracy:"+props.data.health_assessment.is_healthy_probability.toString().slice(3,5)+")":"Plant ded Lmao(test accuracy:"+props.data.health_assessment.is_healthy_probability.toString().slice(3,5)+"%)"}
      </Modal.Title>
    </Modal.Header>
    <Modal.Body>
      {(props.data.health_assessment.is_healthy)?(<>
      {"Since your plant is healthy no health assessment test required. :-)"}
      </>):(<>
      <Row>{"We have 3 suggestions for the following image (ordered in terms of probability)."}</Row>
      <Row>{"1)"+props.data.health_assessment.diseases[0].name+"("+props.data.health_assessment.diseases[0].disease_details.description+")"}</Row>
      <Row>{"2)"+props.data.health_assessment.diseases[1].name+"("+props.data.health_assessment.diseases[1].disease_details.description+")"}</Row>
      </>)

      }
    </Modal.Body></>):<>
    <Modal.Header closeButton>
    <Modal.Title id="contained-modal-title-vcenter">
      Not a plant!
    </Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <p>
        Since this is not a plant cant do health assessment test.
      </p>
    </Modal.Body>
      </>}
    {/* <Modal.Footer>
      <Button onClick={props.onHide}>Close</Button>
    </Modal.Footer> */}
  </Modal>  )
}