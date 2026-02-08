import React from 'react';

const ImagePlaceholder = ({ label, color = 'var(--c-sand)', textColor = 'var(--c-gold)' }) => {
  return (
    <div 
      className="img-placeholder" 
      style={{
        backgroundColor: color,
        color: textColor,
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textTransform: 'uppercase',
        letterSpacing: '0.1em',
        fontFamily: 'var(--font-heading)'
      }}
    >
        <span style={{ fontSize: '3rem', opacity: 0.2 }}>✦</span>
        <span style={{ marginTop: '1rem', fontStyle: 'italic' }}>{label}</span>
    </div>
  );
};

export default ImagePlaceholder;
