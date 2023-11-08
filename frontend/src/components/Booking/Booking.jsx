import React, {useState, useContext} from 'react'
import './booking.css'
import { Form, FormGroup, ListGroup, ListGroupItem, Button } from 'reactstrap'
import {useNavigate} from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext'
import { BASE_URL } from '../../utils/config'

const Booking = ({ tour, avgRating }) => {
    const { price, reviews, title } = tour
    const navigate = useNavigate()

    const {user} = useContext(AuthContext)

    const [booking, setBooking] = useState({
        userId   : user && user._id,
        userEmail: user && user.email,
        tourName : title,
        fullName : '',
        phone    : '',
        guestSize: 1,
        bookAt   : ''
    })

    const handleChange = e => {
        setBooking(prev => ({...prev, [e.target.id] : e.target.value}))
    }

    const serviceFee = 5000
    const totalAmount = Number(price) * Number(booking.guestSize) + Number(serviceFee)

    const handleClick = async e => {
        e.preventDefault()
        console.log(booking);

        try {
            if(!user || user === undefined || user === null){
                return alert('Harap Login Terlebihdahulu')
            }

            const res = await fetch(`${BASE_URL}/booking`,{
                method: 'post',
                headers: {
                    'content-type':'application/json'
                },
                credentials:'include',
                body: JSON.stringify(booking)
            })

            const result = await res.json()
            if(!res.ok) {
                return alert(result.message)
            }
            navigate('/thank-you')
        } catch (err) {
            alert(err.message)
        }
    }

    return (
        <div className="booking">
            <div className="booking__top d-flex align-items-center justify-content-between">
                <h3>Rp.{price} <span>/per orang</span></h3>
                <span className='tour__rating d-flex align-items-center'>
                    <i class="ri-star-fill"></i>
                    {avgRating === 0 ? null : avgRating} ({reviews?.length})
                </span>
            </div>
            <div className="booking__form">
                <h5>Informasi</h5>
                <Form className='booking__info-form' onSubmit={handleClick}>
                    <FormGroup>
                        <input type="text" placeholder='Nama Lengkap' id='fullName' required onChange={handleChange}/>
                    </FormGroup>
                    <FormGroup>
                        <input type="number" placeholder='No Hp' id='phone' required onChange={handleChange}/>
                    </FormGroup>
                    <FormGroup className='d-flex align-items-center gap-3'>
                        <input type="date" placeholder='' id='bookAt' required onChange={handleChange}/>
                        <input type="number" placeholder='Orang' id='guestSize' required onChange={handleChange}/>
                    </FormGroup>
                </Form>
            </div>
            <div className="booking__bottom">
                <ListGroup>
                    <ListGroupItem className='border-0 px-0'>
                        <h5 className='d-flex align-items-center gap-1'>
                            Rp.{price} <i class='ri-close-line'></i> 1 orang
                        </h5>
                        <span> Rp.{price}</span>
                    </ListGroupItem>
                    <ListGroupItem className='border-0 px-0'>
                        <h5>Biaya Pelayanan</h5>
                        <span> Rp.{serviceFee}</span>
                    </ListGroupItem>
                    <ListGroupItem className='border-0 px-0 total'>
                        <h5>Total</h5>
                        <span> Rp.{totalAmount}</span>
                    </ListGroupItem>
                </ListGroup>
                <Button className='btn primary__btn w-100 mt-4' onClick={handleClick}>Booking sekarang</Button>
            </div>
        </div>
    )
}

export default Booking