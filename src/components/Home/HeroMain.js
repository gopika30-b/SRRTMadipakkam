import React from 'react';

const HeroMain = () => {
  return (
    <header style={{ paddingLeft: 0 }}>
      <div
        className='p-5 text-center bg-image position-relative'
        style={{ 
          backgroundImage: "url('https://mdbootstrap.com/img/new/slides/041.webp')",
          backgroundSize: 'cover', // Ensure the background covers the entire container
          backgroundPosition: 'center', // Center the background image
          height: '87vh',
        }}
      >
        <div
          className='mask'
          style={{
            backgroundColor: 'rgba(0, 0, 0, 0.6)',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            boxSizing: 'border-box', 
          }}
        >
          <div className='text-white'>
            <h1 className='mb-3' style={{ fontSize: '3rem' }}>Heading</h1>
            <h4 className='mb-3' style={{ fontSize: '1.5rem' }}>Subheading</h4>
            <a 
              className='btn btn-outline-light btn-lg' 
              href='#!' 
              role='button'
              style={{ 
                fontSize: '1.2rem', 
                padding: '10px 30px',
                textDecoration: 'none',
                borderRadius: '30px',
              }}
            >
              Call to action
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default HeroMain;
