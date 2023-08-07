import { useState } from 'react'
import { horses } from '../data/data.js'
import "./horseSearch.css"

export default function HorseSearch() {

    const [searchTerm, setSearchTerm] = useState('')
    const [filteredHorses, setFilteredHorses] = useState(horses)

    const handleInputChange = (e) => {
        const value = e.target.value
        setSearchTerm(value)

        const filtered = horses.filter(horse => {
            return horse.name.toLowerCase().includes(value.toLowerCase())
        })

        setFilteredHorses(filtered)
    }

    return(
        <main>
            <h1>Search through horses</h1>

            <section className='search-container'>
                <input 
                    type='text'
                    placeholder="Search horse's name"
                    value={searchTerm}
                    onChange={handleInputChange}
                />

            </section>

            <section className='horses-list'>
                {filteredHorses.map((horse, index) => (
                    <div key={index}>
                        <h2>{horse.name}</h2>
                        <p>Gender: {horse.gender}</p>
                        <p>Breed: {horse.breed}</p>
                        <p>Age: {horse.age}</p>
                        {horse.gender === 'Female' && <p>Pregnancy Status: {horse.pregnancyStatus ? 'Pregnant' : 'Not Pregnant'}</p>}
                    </div>
                ))}
            </section>

        </main>
    )
}