import { useParams } from 'react-router-dom'
import { horses } from '../data/data.js'
import "./horseInfo.css"
import stockMare from '../images_icons/stock_mare.jpeg'
import stockStallion from '../images_icons/stock_stallion.jpeg'

export default function HorseInfo() {
    const { id } = useParams()
    const horse = horses.find(h => h._id === id)

    if (!horse) {
        // Replace with 404
        return <div>Horse not found.</div>
    }

    const FemaleInfo = () => (
        <div className="grid female-grid">
            <div className='name'><h2>{horse.name}</h2>
                <p><strong>Breed:</strong> {horse.breed}</p>
                <p><strong>Gender:</strong> {horse.gender}</p>
                <p><strong>Age:</strong> {horse.age}</p>
                <p><strong>Reproduction:</strong> {horse.reproduction}</p>
                {horse.gender === 'Mare' && (
                    <p><strong>Status:</strong> {horse.pregnant ? 'Pregnant' : 'Not Pregnant'}</p>
                )}</div>
            <div className='pictures'><img src={stockMare} alt="Mare" /></div>
            <div className='ultrasound'>Ultrasound Info:</div>
            <div className='shoeing'>Shoeing Info:</div>
            <div className='breeding'>Breeding Program:</div>
            <div className='dental'>Dental Info:</div>
            <div className='deworming'>Deworming Info:</div>
        </div>
    )

    const MaleInfo = () => (
        <div className="grid male-grid">
            <div className='name'><h2>{horse.name}</h2>
                <p><strong>Breed:</strong> {horse.breed}</p>
                <p><strong>Gender:</strong> {horse.gender}</p>
                <p><strong>Reproduction:</strong> {horse.reproduction}</p>
                <p><strong>Age:</strong> {horse.age}</p></div>
            <div className='pictures'><img src={stockStallion} alt="Stallion" /></div>
            <div className='sperm'>Sperm Collection:</div>
            <div className='shoeing'>Shoeing Info:</div>
            <div className='dental'>Dental Check:</div>
            <div className='deworming'>Deworming Info:</div>
        </div>
    )

    return (
        <main>
            {horse.gender === 'Mare' ? <FemaleInfo /> : <MaleInfo />}
        </main>
    )
}