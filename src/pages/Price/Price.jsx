import React from 'react'

const Price = () => {
  return (
    <section className={'price'}>
        <div className='container'>
            <p className={'spec__desc'}>
            СТОИМОСТЬ ОБУЧЕНИЯ
                <br/>
                <h4 className={'spec__subdesc'}>
                При высоком уровне обучения и самых передовых условий для студентов, цена годового контракта в нашем колледже сохранена на среднем рыночном уровне
                </h4>
            </p>
           <div className="price-table">
            <table>
                    <tbody>
                        <tr>
                            <td width={424}>
                                <p>
                                    <img src="https://nomad.iuk.kg/wp-content/uploads/2022/07/to-new-postup-3.png" alt="" width={50}  />
                                    IT бизнес 
                                </p>
                            </td>
                            <td width={151}>
                                <p>160 000 сомов в год</p>
                            </td>
                        </tr>
                        <tr>
                            <td width={424}>
                                <p>
                                    <img src="https://nomad.iuk.kg/wp-content/uploads/2022/07/to-new-postup-7.png" alt="" width={50} />
                                    Перевод и международные медиа
                                </p>
                            </td>
                            <td width={151}>
                                <p>100 000 сомов в год</p>
                            </td>
                        </tr>
                        <tr>
                            <td width={424}>
                                <p>
                                    <img src="https://nomad.iuk.kg/wp-content/uploads/2022/07/to-new-postup-13.png" alt="" width={50}  />
                                    Цифровой маркетинг 
                                </p>
                            </td>
                            <td width={151}>
                                <p>100 000 сомов в год</p>
                            </td>
                        </tr>
                        <tr>
                            <td width={424}>
                                <p>
                                    <img src="https://nomad.iuk.kg/wp-content/uploads/2022/07/to-new-postup-4.png" alt="" width={50}  />
                                    Бизнес право 
                                </p>
                            </td>
                            <td width={151}>
                                <p>100 000 сомов в год</p>
                            </td>
                        </tr>
                        <tr>
                            <td width={424}>
                                <p>
                                    <img src="https://nomad.iuk.kg/wp-content/uploads/2022/07/to-new-postup-12.png" alt="" width={50}  />
                                    Финансовые технологии в бизнесе  
                                </p>
                            </td>
                            <td width={151}>
                                <p>100 000 сомов в год</p>
                            </td>
                        </tr>
                        <tr>
                            <td width={424}>
                                <p>
                                    <img src="https://nomad.iuk.kg/wp-content/uploads/2022/07/design.png" alt="" width={50}  />
                                    Графический дизайн 
                                </p>
                            </td>
                            <td width={151}>
                                <p>100 000 сомов в год</p>
                            </td>
                        </tr>
                    </tbody>
                </table>
           </div>
        </div>
    </section>
  )
}

export default Price