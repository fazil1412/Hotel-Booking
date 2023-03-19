import React from 'react'
import useFetch from '../../hooks/useFetch';
import './propertyList.css'


const PropertyList = () => {
    const { data, loading, error } = useFetch("/hotels/countByType")
    // console.log(data);

    const images = [
        "https://cdn.britannica.com/96/115096-050-5AFDAF5D/Bellagio-Hotel-Casino-Las-Vegas.jpg",
        "https://teja12.kuikr.com/is/a/c/880x425/public/images/apartments/original_img/k9yqlp.gif",
        "https://cf.bstatic.com/xdata/images/xphoto/max1440/48360698.jpg?k=1949036cc17d7e11e914390f1d3958823e8620aa6ed69e2b3f217794b603dbc5&o=",
        "https://media-cdn.tripadvisor.com/media/vr-splice-j/09/1f/7e/d1.jpg",
        "https://cabinsathickoryridge.com/media/The-Lodge-Spring.jpg"
    ];

    return (
        <div className="pList">
                            <div className="pListItem">
                                <img src={images[0]} alt="image1" className="pListImg" />
                                <div className="pListTitles">
                                    <h1>Hotels</h1>
                                    <h3>3 Hotels</h3>
                                </div>
                            </div>
                            <div className="pListItem">
                                <img src= {images[1]} alt="image1" className="pListImg" />
                                <div className="pListTitles">
                                    <h1>Apartments</h1>
                                    <h3>3 Apartments</h3>
                                </div>
                            </div>
                            <div className="pListItem">
                                <img src= {images[2]}  alt="image1" className="pListImg" />
                                <div className="pListTitles">
                                    <h1>Resorts</h1>
                                    <h3>3 Resorts</h3>
                                </div>
                            </div>
                            <div className="pListItem">
                                <img src= {images[3]} alt="image1" className="pListImg" />
                                <div className="pListTitles">
                                    <h1>Villas</h1>
                                    <h3>4 Villas</h3>
                                </div>
                            </div>
    
        </div>
    )
}

export default PropertyList
