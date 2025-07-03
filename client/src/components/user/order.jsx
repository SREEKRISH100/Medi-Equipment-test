// import React from 'react'
// import { Button, Container, Form, Row,Col} from 'react-bootstrap'
// import { useState } from 'react'
// import AXIOS from 'axios';
// import { useParams } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom'
// export default function OrderNow() {
//   const nav=useNavigate()
//   const params=useParams()
//   const userid=sessionStorage.getItem('userid')
//    const [record,setRecord]=useState({address:"",prodquantity:"1",pid:params.pid,sellerid:params.sellerid,userid:userid})
//     const[errors,setErrors]=useState({});
   
    
    
    
//     console.log("Userid",userid)

//   const findErrors=()=>{
//     const {address,prodquantity}=record;
//     const newerrors={};
//     if(!address||address==""){
//       newerrors.productname="address field is required";
//     }
//     else if(address.length>50)
//     {
//       newerrors.address="content is too long";
//     }
//    if(!prodquantity||prodquantity==""){
//       newerrors.prodquantity="product quantity field is required";
//     }
//     else if(prodquantity.length>30)
//     {
//       newerrors.prodquantity="content is too long";
//     }
// return newerrors;
//     }
  
 
//     const setValue=(field,value)=>{ 
//         setRecord({...record,[field]:value})
//         if( !!errors[field]){
//           setErrors({
//             ...errors,[field]: null
//           })
//         }
//     }
//    const handlersubmit=(e)=>{
//         e.preventDefault();
//        const newErrors=findErrors();
//         if(Object.keys(newErrors).length>0)
//         {
//          setErrors(newErrors)
   
//         }
//         else{
//         const url="http://localhost:9000/orderproduct";
        
//         AXIOS.post(url,record).then(
//             (res)=>{
//                    alert(res.data)
                  
//                    nav("/emppage/myorder")

//             }
//         )

//           }
          

//     }
//   return (
// <>
//  <Container>
//  <Row className="shadow rounded-4 p-4 mt-7  border">
//                 <Col>
                
//             <Form.Label>
//               <h3 className="text-info">Order From here</h3>
//             </Form.Label>
//           </Col>
//           </Row>
//           <br>
//           </br>
//     <Row>
//         <Col>
//         <Form onSubmit={handlersubmit} encType='multipart/form-data'> 
//         <Form.Group>
//         <Form.Label>Address :</Form.Label>
// <Form.Control type="text" name="address" onChange={(e)=>{
//     setValue(e.target.name,e.target.value)
//   }}isInvalid={!!errors.address}/>
//   <Form.Control.Feedback type='invalid'>
//     {errors.address}
//   </Form.Control.Feedback>
  
// </Form.Group>

// <Form.Group>
//         <Form.Label>Product Quantity:</Form.Label>
// <Form.Control type="number" name="prodquantity" onChange={(e)=>{
//     setValue(e.target.name,e.target.value)
//   }}isInvalid={!!errors.prodquantity}/>
//   <Form.Control.Feedback type='invalid'>
//     {errors.prodquantity}
//   </Form.Control.Feedback>
// </Form.Group>
// <Form.Group>
// <button className="cbutton" type="submit" variant="info">
//         Make Payment
//     </button>
// </Form.Group>
         

//         </Form>
//         </Col>
//     </Row>
//  </Container>
// </>
//   )
// }
import React, { useState } from 'react'
import { Button, Container, Form, Row, Col } from 'react-bootstrap'
import AXIOS from 'axios';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'

export default function OrderNow() {
  const nav = useNavigate()
  const params = useParams()
  const userid = sessionStorage.getItem('userid')

  const [record, setRecord] = useState({
    address: "",
    prodquantity: params.quantity || "1", 
    pid: params.pid,
    sellerid: params.sellerid,
    userid: userid
  })

  const [errors, setErrors] = useState({})

  const findErrors = () => {
    const { address, prodquantity } = record
    const newErrors = {}

    if (!address || address === "") {
      newErrors.address = "Address field is required"
    } else if (address.length > 50) {
      newErrors.address = "Address content is too long"
    }

    if (!prodquantity || prodquantity === "") {
      newErrors.prodquantity = "Product quantity field is required"
    } else if (prodquantity.length > 30) {
      newErrors.prodquantity = "Product quantity is too long"
    }

    return newErrors
  }

  const setValue = (field, value) => {
    setRecord({ ...record, [field]: value })
    if (errors[field]) {
      setErrors({
        ...errors, [field]: null
      })
    }
  }

  const handlersubmit = (e) => {
    e.preventDefault()
    const newErrors = findErrors()

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
    } else {
      const url = "http://localhost:9000/orderproduct"
      AXIOS.post(url, record).then((res) => {
        alert(res.data)
        nav("/emppage/myorder")
      })
    }
  }

  return (
    <>
      <Container>
        <Row className="shadow rounded-4 p-4 mt-7 border">
          <Col>
            <Form.Label>
              <h3 className="text-info">Order From here</h3>
            </Form.Label>
          </Col>
        </Row>
        <br />
        <Row>
          <Col>
          <Form onSubmit={handlersubmit} encType="multipart/form-data">
  <Form.Group>
    <Form.Label>Address:</Form.Label>
    <Form.Control
      as="textarea"
      name="address"
      onChange={(e) => {
        setValue(e.target.name, e.target.value);
      }}
      isInvalid={!!errors.address}
    />
    <Form.Control.Feedback type="invalid">
      {errors.address}
    </Form.Control.Feedback>
  </Form.Group>

  
  <Form.Group>
    <button className="cbutton" type="submit" variant="info" style={{marginTop:"25px",backgroundColor:"Blue",border:"none",padding:"10px"}}>
      Make Payment
    </button>
  </Form.Group>
</Form>

          </Col>
        </Row>
      </Container>
    </>
  )
}
