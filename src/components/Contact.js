import React from 'react'
import BannerImage from '../assets/banner.jpg';
import '../styles/Contact.css'

export const Contact = () => {
  return (
    <div className='contact'>
      <div className='leftSide' style={{ backgroundImage: `url(${BannerImage})` }}>

      </div>
      <div className='rightSide'>
        <h1>Bizimle İletişime geçin</h1>
        <form>
          <label>Ad Soyad: </label>
          <input type="text" name='name' placeholder='Lütfen adınızı soyadınızı giriniz...' />
          <label>Email: </label>
          <input type="email" name='email' placeholder='Lütfen Email Adresinizi giriniz...' />
          <label>Mesajınız: </label>
          <textarea rows="6" name='message' placeholder='Lütfen mesajınızı giriniz...'></textarea>
        </form>
      </div>
    </div>
  )
}

export default Contact
