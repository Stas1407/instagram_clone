import {useEffect, useState} from "react"
import Story from "../components/Story"

function Stories() {
    const [suggestions, setSuggestions] = useState([])

    const { faker } = require('@faker-js/faker');

    useEffect(() => {
        const suggestions = [...Array(20)].map((_, i) => ({
            ...faker.helpers.contextualCard(),
            id: i,
        }))
        
        setSuggestions(suggestions)
    }, [])

    return (
        <div className='flex space-x-3 p-6 bg-white mt-8 border-gray-200 border rounded-sm overflow-x-auto
        scrollbar-thin scrollbar-thumb-black scrollbar-thumb-rounded-full'>
            {suggestions.map(profile => (
                <Story key={profile.id} img={profile.avatar} username={profile.username} />
            ))}
        </div>
    )
}

export default Stories