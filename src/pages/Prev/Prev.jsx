import React from 'react'

const Prev = () => {
  return (
    <section className={'prev'}>
        <div className='container'>
            <h2 className={'prev__title'}>
                <img src="https://nomad.iuk.kg/wp-content/uploads/2022/07/nomad-logo-2.png" alt="smth" />
                NOMAD COLLEGE
            </h2>
            <p className={'prev__desc'}>
                Самый передовой колледж Кыргызстана
                <br/>
                <span className={'prev__subdesc'}>
                    Живи для учения, учись для жизни
                </span>
            </p>
            <div className={'prev__btns'}>
                <button className={'prev__btn'}>Профессии будущего</button>
                <button className={'prev__btn'}>Свяжитесь с нами</button>
            </div>
        </div>
    </section>
    );
};

export default Prev;
