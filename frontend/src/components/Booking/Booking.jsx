import React, {useState} from 'react'
import './booking.css'
import { Form, FormGroup, ListGroup, ListGroupItem, Button } from 'reactstrap'

const Booking = ({ tour, avgRating }) => {
    const { price, reviews } = tour

    const [credentials, setCredentials] = useState({
        userId: '01', //later
        userEmail: 'example@gmail.com',
        fullName: '',
        phone: '',
        guestSize: 1,
        bookAt: ''
    })

    const handleChange = e => {
        setCredentials(prev => ({...prev, [e.target.id] : e.target.value}))
    }

    //later
    const handleClick = e => {
        e.preventDefault()
        console.log(credentials)
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
                        <span> Rp.2000</span>
                    </ListGroupItem>
                    <ListGroupItem className='border-0 px-0 total'>
                        <h5>Total</h5>
                        <span> Rp.129</span>
                    </ListGroupItem>
                </ListGroup>
                <Button className='btn primary__btn w-100 mt-4' onClick={handleClick}>Booking sekarang</Button>
            </div>
        </div>
    )
}

export default Booking