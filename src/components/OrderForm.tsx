import { useFormik } from 'formik';
import '../style.css';
import styled from 'styled-components';
import * as Yup from 'yup';
import { ICardType, IToggle } from '../types';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Visa from '../assets/visa.png';
import MasterCard from '../assets/mastercard.png';
import World from '../assets/world.png';
import PayPal from '../assets/paypal.png'


  const FormStyle = styled.form`
    margin: 0 auto;
    padding: 15px;
    background-color: #fff;
    border-radius: 3px;
    h2 {
      text-align: center;
      font-size: 28px;
      text-transform: uppercase;
    }
    label {
      display: block;
      margin-top: 5px;
      font-size: 18px;
      font-weight: bold;
    }
    input {
      width: 100%;
      height: 30px;
      padding: 5px 15px;
      background: #fff;
      border: 1px solid #e2e2e2;
      color: #353535;
      border-radius: 10px;
      font-size: 16px;
      &:focus {
        outline: 1px solid rgb(129, 49, 49);
      }
    }
    button {
      width: 35%;
      padding: 10px;
      margin-top: 15px;
      font-size: 18px;
      color: #fff;
      border: 0;
      border-radius: 10px;
      background-image: linear-gradient(
        257deg,
        rgb(129, 49, 49),
        rgb(183, 35, 35)
      );
    }
  `;

  const LogoStyle = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-end;;
  `

  const OrderForm = ({ toggle }: IToggle) => {
    const navigate = useNavigate();
      const [logo, setLogo] = useState(PayPal);

    const onSetLogoBlur = () => {
      if(formik.touched.numberOfCard && formik.values.numberOfCard.length == 0) setLogo(PayPal)
    }

    const onChange = (): void =>  {
        if(+formik.values.numberOfCard[0] == 4) setLogo(Visa)
        else if (+formik.values.numberOfCard[0] == 5) setLogo(MasterCard)
        else if (+formik.values.numberOfCard[0] == 6) setLogo(World)
        else setLogo(PayPal)
    }
    

  const formik = useFormik({
    initialValues: {
      name: '',
      phone: '',
      address: '',
      email: '',
      numberOfCard: '',
      cardData: '',
      cardCvv: ''
    },
    
    
    validationSchema: Yup.object({
      name: Yup.string()
        .matches(
          /([A-Za-zА-Яа-яЁё]{3,}\W[A-Za-zА-Яа-яЁё]{3,})$/gm,
          'This field involved First and Second name'
        )
        .required('This field is required!'),
      email: Yup.string()
        .email('Invalid email email')
        .required('This field is required!'),
      phone: Yup.string()
        .matches(/^([+]{1}[0-9]{9,20})?$/, 'Invalid number')
        .required('A phone number is required'),
      address: Yup.string()
        .matches(
          /([A-Za-zА-Яа-яЁё]{5,}\W[A-Za-zА-Яа-яЁё]{5,}\W[A-Za-zА-Яа-яЁё]{5,})$/gm,
          'Invalid address'
        )
        .required('An address is required'),
      numberOfCard: Yup.string()
        .matches(/^([0-9]{16})?$/, 'Invalid number of card')
        .required('A number of card is required'),
      cardData: Yup.string()
        .matches(/((^(0[1-9]|1[012])([2-9]|[3-9]){2}$)|(^(0?[1-9]|1[0-2])\/([2-9]|[3-9]){2}$))/, 'Invalid card valid')
        .required('A card valid is required'),
      cardCvv: Yup.string()
        .matches(/^([0-9]{3})?$/, 'Invalid CVV')
        .required('A CVV is required'),
    }),
    onSubmit: () => {
      alert('Your order was accepted');
      toggle(true);
      setTimeout(() => {
        navigate('/');
      }, 3000);
    },
  });

  return (
    
    <FormStyle onSubmit={formik.handleSubmit}>
      <h2>Customer's information</h2>
      <label htmlFor="name">Your first and second name</label>
      <input
        id="name"
        name="name"
        type="text"
        placeholder="Alex Popov"
        value={formik.values.name}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      {formik.errors.name && formik.touched.name ? (
        <div className="error">{formik.errors.name}</div>
      ) : null}
      <label htmlFor="email">Your email</label>
      <input
        id="email"
        name="email"
        type="email"
        value={formik.values.email}
        onChange={formik.handleChange}
        placeholder="krambambulia@.com"
        onBlur={formik.handleBlur}
      />
      {formik.errors.email && formik.touched.email ? (
        <div className="error">{formik.errors.email}</div>
      ) : null}
      <label htmlFor="phone">Your phone</label>
      <input
        id="phone"
        name="phone"
        type="string"
        value={formik.values.phone}
        onChange={formik.handleChange}
        placeholder="+375*********"
        onBlur={formik.handleBlur}
      />
      {formik.errors.phone && formik.touched.phone ? (
        <div className="error">{formik.errors.phone}</div>
      ) : null}
      <label htmlFor="address">Your address</label>
      <input
        id="address"
        name="address"
        type="textarea"
        value={formik.values.address}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      {formik.errors.address && formik.touched.address ? (
        <div className="error">{formik.errors.address}</div>
      ) : null}
      <div className="card-form">
      <LogoStyle>
        <label htmlFor="numberOfCard">Number of card 
        </label>
        <div >
          <img src={logo} alt="logo" />
        </div>
      </LogoStyle>
        <input
          id="numberOfCard"
          name="numberOfCard"
          type="string"
          placeholder="Insert 16 digitals"
          value={formik.values.numberOfCard}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          onInput = {()=>onChange()}
          onBlurCapture = {()=> onSetLogoBlur()}
        />
        {formik.errors.numberOfCard && formik.touched.numberOfCard ? (
          <div className="error">{formik.errors.numberOfCard}</div>
        ) : null}
        <div className="card-data">
          <div>
            <label htmlFor="cardData">VALID THRU</label>
            <input
              id="cardData"
              name="cardData"
              type="string"
              placeholder="MM/YY"
              value={formik.values.cardData.replace(/\d{2}(?=(\d{2}))/, '$&/')}
              onChange={formik.handleChange} 
              onBlur={formik.handleBlur}
            />
            {formik.errors.cardData && formik.touched.cardData ? (
              <div className="error">{formik.errors.cardData}</div>
            ) : null}
          </div>
          <div>
            <label htmlFor="cardCvv">CVV</label>
            <input
              id="cardCvv"
              name="cardCvv"
              type="string"
              value={formik.values.cardCvv}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.errors.cardCvv && formik.touched.cardCvv ? (
              <div className="error">{formik.errors.cardCvv}</div>
            ) : null}
          </div>
        </div>
      </div>
      <button type="submit">Submit</button>
    </FormStyle>
  );
};

export default OrderForm;
