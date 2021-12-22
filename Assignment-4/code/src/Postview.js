import React,{ useEffect, useState } from 'react';
import './Postview.css';

const Postview=()=> {
  const [data,usedata]=useState([])

  const getData = async () => {
    const res = await fetch("http://localhost:3004/user")
    const actualData = await res.json();
    usedata(actualData)
  }
  useEffect(()=>{
    getData()
  },[])
  return (
    <>
    <div className='main-container'>
      <div className="nav-bar">
        <div className='nav-bar1'>
          <img className='instalogo' src="https://cdn-icons-png.flaticon.com/512/87/87390.png" alt="" />
        </div>
        <div className='nav-bar2'>
          <p className='insta-clone'><b>Insta clone</b></p>

        </div>
        <div className='nav-bar3'>
          <img className='cameralogo' src="https://www.maxpixel.net/static/photo/1x/Icon-Camera-Insta-Picture-Instagram-3814055.png" alt="" />
        </div>
      </div>

      {
        data.map((Elem,ind)=>{
          return (
            <>
            <div className='post'>
              <div className='heading'>
                <div className='details'>
                  <div > <h1>{Elem.name}</h1></div>
                  <div ><p className='location'><b> {Elem.location}</b></p></div>
                </div>
                <div className='dots'><b>...</b></div>
              </div>
              <div>
                <img className='post-image' src={Elem.PostImage} alt="" />
              </div>
              <div className='likesandshares'>
                <div className='likesandshares1'>
                  <img className='like' src="https://p.kindpng.com/picc/s/169-1694264_computer-icons-like-button-heart-symbol-heart-svg.png" alt="" />
                </div>
                <div className='likesandshares2'>
                  <img className='share' src="https://www.pinclipart.com/picdir/middle/173-1731168_paperplane-instagram-share-icon-png-clipart.png" alt="" />
                </div>
                <div className='likesandshares3'>
                  <p><b>{Elem.Date}</b></p>
                </div>
              </div>
              <div className='likes'>
                <p><b>{Elem.likes} likes</b></p>
              </div>
              <div className='description'>
              <p>{Elem.description}</p>
              </div>
              
            </div>
            </>
          )
        })
      }
    </div>
    </>
  );
}

export default Postview;
