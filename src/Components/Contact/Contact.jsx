import React from 'react';
import contactImage from '../Assets/ContactImage.svg';
import './Contact.css';

export default function Contact() {
    return (
        <div className="contactWrapper">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-sm-12">
                        <h3 className='titleOfCntact'>Biz bilan aloqa!</h3>
                        <p className='smallTeaxtOfContact'>
                            Siz qulay sharoitlarga ega <b>UY-JOY</b> izlayapsizmi? <br /> Unday bolsa siz to'g'ri manzildasiz!
                        </p>
                        <img className='contactImage' src={contactImage} alt="Have a img" />
                    </div>
                    <div className="col-md-6 col-sm-12">
                        <div className="input-gro4up">
                            <input type="text" className="form-control contactInputs" placeholder="Ism" aria-label="username" aria-describedby="basic-addon1" />
                            <input type="text" className="form-control contactInputs my-3" placeholder="Familya" aria-label="surname" aria-describedby="basic-addon1" />
                            <input type="text" className="form-control contactInputs" placeholder="Telefon" aria-label="phone" aria-describedby="basic-addon1" />
                            <textarea class="form-control contactTextArea my-3" placeholder='Xabar yuboring' aria-label="With textarea"></textarea>
                        </div>
                        <button type="button" class="btn btn-dark my-3">Xabar yuborish</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
