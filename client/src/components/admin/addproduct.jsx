// import React from 'react'
// import { Button, Container, Form, Row,Col} from 'react-bootstrap'
// import { useState } from 'react'
// import AXIOS from 'axios';
// export default function Addproducte() {
//     const [record,setRecord]=useState({productname:"",productquantity:"",productprice:"",prod_used:"",category:"",image:""})
//     const[errors,setErrors]=useState({});
//     const userid=sessionStorage.getItem('sellerid')
//   const formdata=new FormData();
//   const findErrors=()=>{
//     const {productname,productquantity,productprice,prod_used,category,image}=record;
//     const newerrors={};
//     if(!productname||productname==""){
//       newerrors.productname="product field is required";
//     }
//     else if(productname.length>30)
//     {
//       newerrors.productname="content is too long";
//     }
//    if(!productquantity||productquantity==""){
//       newerrors.productquantity="product quantity field is required";
//     }
//    if(!productprice||productprice==""){
//       newerrors.productprice="product  price field is required";
//     }
//     if(!prod_used||prod_used==""){
//       newerrors.prod_used="product field is required";
//     }
//     if(!image||image==""){
//       newerrors.image="image field is required";
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
//     const handlersubmit=(e)=>{
//         e.preventDefault();
//         const newErrors=findErrors();
//         if(Object.keys(newErrors).length>0)
//         {
//          setErrors(newErrors)
   
//         }
//         else{
//         const url="http://localhost:9000/addproduct";
//         formdata.append("productname",record.productname)
//         formdata.append("productquantity",record.productquantity)
//         formdata.append("productprice",record.productprice)
//         formdata.append("prod_used",record.prod_used)
//         formdata.append("category",record.category)
//         formdata.append("image",record.image)
//         formdata.append("sellerid",userid)
//         AXIOS.post(url,formdata,{headers:{'Content-Type':'multipart/form-data'}}).then(
//             (res)=>{
//                    alert(res.data)
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
//               <h3 className="text-info">Add products</h3>
//             </Form.Label>
//           </Col>
//           </Row>
//     <Row>
//         <Col>
//         <Form onSubmit={handlersubmit} encType='multipart/form-data'> 
//         <Form.Group>
//         <Form.Label>Product Name :</Form.Label>
// <Form.Control type="text" name="productname" onChange={(e)=>{
//     setValue(e.target.name,e.target.value)
//   }}isInvalid={!!errors.productname}/>
//   <Form.Control.Feedback type='invalid'>
//     {errors.productname}
//   </Form.Control.Feedback>
  
// </Form.Group>

// <Form.Group>
//         <Form.Label>Product Quantity:</Form.Label>
// <Form.Control type="number" name="productquantity" onChange={(e)=>{
//     setValue(e.target.name,e.target.value)
//   }}isInvalid={!!errors.productquantity}/>
//   <Form.Control.Feedback type='invalid'>
//     {errors.productquantity}
//   </Form.Control.Feedback>
// </Form.Group>

        
//         <Form.Group>
//         <Form.Label>Product Price :</Form.Label>
//         <Form.Control type="number" name="productprice" onChange={(e)=>{
//             setValue(e.target.name,e.target.value)
//           }}isInvalid={!!errors.productprice}/>
//            <Form.Control.Feedback type='invalid'>
//     {errors.productprice}
//   </Form.Control.Feedback>
  

//         </Form.Group>
        
//         <Form.Group>
//         <Form.Label>Product Used :</Form.Label>
//         <Form.Control type="text" name="prod_used" onChange={(e)=>{
//             setValue(e.target.name,e.target.value)
//           }}isInvalid={!!errors.prod_used}/>
//            <Form.Control.Feedback type='invalid'>
//     {errors.prod_used}
    
//   </Form.Control.Feedback>
  

//         </Form.Group>
        
//         <Form.Group>
//         <Form.Label>category :</Form.Label>
//         <Form.Control type="text" name="category" onChange={(e)=>{
//             setValue(e.target.name,e.target.value)
//           }}isInvalid={!!errors.category}/>
//            <Form.Control.Feedback type='invalid'>
//     {errors.category}
//   </Form.Control.Feedback>
  

//         </Form.Group>
 
//         <Form.Group>
//         <Form.Label>Product Image :</Form.Label>
//         <Form.Control type="file" name="image" onChange={(e)=>{
//             setValue(e.target.name,e.target.files[0])
//           }}isInvalid={!!errors.image}/>
//            <Form.Control.Feedback type='invalid'>
//     {errors.image}
//   </Form.Control.Feedback>
  

//         </Form.Group>
 
 
// <Form.Group>
// <button className="cbutton" type="submit" variant="info">
//         upload
//     </button>
// </Form.Group>
         

//         </Form>
//         </Col>
//     </Row>
//  </Container>
// </>
//   )
// }


import React from 'react';
import { Button, Container, Form, Row, Col } from 'react-bootstrap';
import { useState } from 'react';
import AXIOS from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Addproducte() {
  const [record, setRecord] = useState({
    productname: '',
    productquantity: '',
    productprice: '',
    prod_used: '',
    category: '',
    image: '',
    description: '', // Adding description state
  });
  
  const [errors, setErrors] = useState({});
  const userid = sessionStorage.getItem('sellerid');
  const formdata = new FormData();

  const findErrors = () => {
    const { productname, productquantity, productprice, prod_used, category, image } = record;
    const newerrors = {};
    if (!productname || productname === '') {
      newerrors.productname = 'Product name field is required';
    } else if (productname.length > 30) {
      newerrors.productname = 'Content is too long';
    }
    if (!productquantity || productquantity === '') {
      newerrors.productquantity = 'Product quantity field is required';
    }
    if (!productprice || productprice === '') {
      newerrors.productprice = 'Product price field is required';
    }
    if (!prod_used || prod_used === '') {
      newerrors.prod_used = 'Product used field is required';
    }
    if (!image || image === '') {
      newerrors.image = 'Image field is required';
    }
    return newerrors;
  };

  const setValue = (field, value) => {
    setRecord({ ...record, [field]: value });
    if (!!errors[field]) {
      setErrors({
        ...errors, [field]: null,
      });
    }
  };
const navigate=useNavigate()
  const handlersubmit = (e) => {
    e.preventDefault();
    const newErrors = findErrors();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      const url = 'http://localhost:9000/addproduct';
      formdata.append('productname', record.productname);
      formdata.append('productquantity', record.productquantity);
      formdata.append('productprice', record.productprice);
      formdata.append('prod_used', record.prod_used);
      formdata.append('category', record.category);
      formdata.append('image', record.image);
      formdata.append('description', record.description); // Append description
      formdata.append('sellerid', userid);
      AXIOS.post(url, formdata, { headers: { 'Content-Type': 'multipart/form-data' } })
        .then((res) => {
          alert(res.data);
          navigate('/sellerpage/productview1')
        });
    }
  };

  return (
    <>
      <Container>
        <Row className="shadow rounded-4 p-4 mt-7 border">
          <Col>
            <Form.Label>
              <h3 className="text-info">Add Products</h3>
            </Form.Label>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form onSubmit={handlersubmit} encType="multipart/form-data">
              <Form.Group>
                <Form.Label>Product Name:</Form.Label>
                <Form.Control
                  type="text"
                  name="productname"
                  onChange={(e) => {
                    setValue(e.target.name, e.target.value);
                  }}
                  isInvalid={!!errors.productname}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.productname}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group>
                <Form.Label>Product Quantity:</Form.Label>
                <Form.Control
                  type="number"
                  name="productquantity"
                  onChange={(e) => {
                    setValue(e.target.name, e.target.value);
                  }}
                  isInvalid={!!errors.productquantity}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.productquantity}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group>
                <Form.Label>Product Price:</Form.Label>
                <Form.Control
                  type="number"
                  name="productprice"
                  onChange={(e) => {
                    setValue(e.target.name, e.target.value);
                  }}
                  isInvalid={!!errors.productprice}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.productprice}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group>
                <Form.Label>Product Used:</Form.Label>
                <Form.Check
                  type="radio"
                  label="Yes"
                  name="prod_used"
                  value="Yes"
                  onChange={(e) => {
                    setValue(e.target.name, e.target.value);
                  }}
                  isInvalid={!!errors.prod_used}
                />
                <Form.Check
                  type="radio"
                  label="No"
                  name="prod_used"
                  value="No"
                  onChange={(e) => {
                    setValue(e.target.name, e.target.value);
                  }}
                  isInvalid={!!errors.prod_used}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.prod_used}
                </Form.Control.Feedback>

                {/* If product used is "Yes", show description input */}
                {record.prod_used === 'Yes' && (
                  <Form.Group>
                    <Form.Label>Description:</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={3}
                      name="description"
                      onChange={(e) => {
                        setValue(e.target.name, e.target.value);
                      }}
                    />
                  </Form.Group>
                )}
              </Form.Group>

              <Form.Group>
                <Form.Label>Category:</Form.Label>
                <Form.Control
                  type="text"
                  name="category"
                  onChange={(e) => {
                    setValue(e.target.name, e.target.value);
                  }}
                  isInvalid={!!errors.category}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.category}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group>
                <Form.Label>Product Image:</Form.Label>
                <Form.Control
                  type="file"
                  name="image"
                  onChange={(e) => {
                    setValue(e.target.name, e.target.files[0]);
                  }}
                  isInvalid={!!errors.image}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.image}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group>
                <Button className="cbutton" type="submit" variant="info">
                  Upload
                </Button>
              </Form.Group>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
}
