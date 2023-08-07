import { useState } from 'react'
import { horses } from '../data/data.js'
import { Link } from 'react-router-dom'
import "./horseSearch.css"
import horseIcon from '../images_icons/icons8-horse-96.png'

export default function HorseSearch() {

    const [filters, setFilters] = useState({
        name: '',
        gender: 'All',
        breed: 'All',
        age: 'All',
        pregnant: false,
        reproduction: 'All'
    })

    const [filteredHorses, setFilteredHorses] = useState(horses)

    const handleInputChange = (e) => {
        const { name, value } = e.target
        const newFilters = { ...filters, [name]: value }

        const filtered = horses.filter(horse => {
            return (
                (!newFilters.name || horse.name.toLowerCase().includes(newFilters.name.toLowerCase())) &&
                (newFilters.gender === 'All' || horse.gender === newFilters.gender) &&
                (newFilters.breed === 'All' || horse.breed === newFilters.breed) &&
                (newFilters.age === 'All' || horse.age.toString() === newFilters.age) &&
                (!newFilters.pregnant || (horse.gender === 'Mare' && horse.pregnant)) &&
                (newFilters.reproduction === 'All' || horse.reproduction === newFilters.reproduction)
            )
        })

        setFilters(newFilters)
        setFilteredHorses(filtered)
    }

    return (
        <main>
            <h1>Search through horses</h1>

            <section className='search-container'>
                {/* Name */}
                <div className="input-group">
                    <label htmlFor="name">Name:</label>
                    <input id="name" type='text' name='name' placeholder="Search horse's name" value={filters.name} onChange={handleInputChange} />
                </div>

                {/* Gender */}
                <div className="input-group">
                    <span>Gender:</span>
                    <div>
                        <label>
                            <input type='radio' name='gender' value='All' checked={filters.gender === 'All'} onChange={handleInputChange} /> All
                        </label>
                        <label>
                            <input type='radio' name='gender' value='Mare' checked={filters.gender === 'Mare'} onChange={handleInputChange} /> Mare
                        </label>
                        <label>
                            <input type='radio' name='gender' value='Stud' checked={filters.gender === 'Stud'} onChange={handleInputChange} /> Stud
                        </label>
                        <label>
                            <input type='radio' name='gender' value='Gelding' checked={filters.gender === 'Gelding'} onChange={handleInputChange} /> Gelding
                        </label>
                    </div>
                </div>

                {/* Breed */}
                <div className="input-group">
                    <label htmlFor="breed">Breed:</label>
                    <select id="breed" name='breed' value={filters.breed} onChange={handleInputChange}>
                        <option value='All'>All</option>
                        <option value='Quarterhorse'>Quarterhorse</option>
                        <option value='Painted'>Painted</option>
                        <option value='Thoroughbred'>Thoroughbred</option>
                        <option value='Donkey'>Donkey</option>
                    </select>
                </div>

                {/* Age */}
                <div className="input-group">
                    <label htmlFor="age">Age:</label>
                    <select id="age" name='age' value={filters.age} onChange={handleInputChange}>
                        <option value='All'>All</option>
                        <option value='0'>Weanling</option>
                        <option value='1'>Yearling</option>
                        {[...Array(49).keys()].map(i => {
                            return (
                                <option key={i + 2} value={i + 2}>
                                    {i + 2}
                                </option>
                            )
                        })}
                    </select>
                </div>

                {/* Pregnant */}
                <div className="input-group">
                    <label htmlFor="pregnant">Pregnant?</label>
                    <input id="pregnant" type='checkbox' name='pregnant' checked={filters.pregnant} onChange={e => handleInputChange({ target: { name: 'pregnant', value: e.target.checked } })} />
                </div>

                {/* Reproduction */}
                <div className="input-group">
                    <label htmlFor="reproduction">Reproduction:</label>
                    <select id="reproduction" name='reproduction' value={filters.reproduction} onChange={handleInputChange}>
                        <option value='All'>All</option>
                        <option value='recipient mare'>Recipient Mare</option>
                        <option value='brood mare'>Brood Mare</option>
                        <option value='stallion'>Stallion</option>
                    </select>
                </div>

            </section>

            <section className='horses-list'>
                {filteredHorses.map((horse, index) => (
                    <Link to={`/horses/${horse._id}`} key={index} className='horses-list-divs'>
                        <div>
                            <img src={horseIcon} alt='Horse Icon' />
                        </div>
                        <div>
                            <h2>{horse.name}</h2>
                            {/* <p>Breed: {horse.breed}</p>
                            <p>Gender: {horse.gender}</p>
                            <p>Reproduction: {horse.reproduction}</p>
                            {horse.gender === 'Mare' && <p>Status: {horse.pregnant ? 'Pregnant' : 'Not Pregnant'}</p>}
                            <p>Age: {horse.age === 0 ? 'Weanling' : horse.age === 1 ? 'Yearling' : horse.age}</p> */}

                        </div>
                    </Link>
                ))}
            </section>

        </main>

    )
}