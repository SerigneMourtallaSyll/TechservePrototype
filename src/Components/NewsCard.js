import React from 'react'

function NewsCard({title}) {
  return (
    <div className='py-5' id='cardContent'>
        <div className='p-5' id='card'>
            <h4 className='py-2'>{title}</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipiscing edit. Quisque dignissim surpis so consectetur somper. Odio sem tristique purrus velt uokens.</p>
            <p>Nullam auguea arcu.pellentique non liberosit amet.</p>
            <button className='btn px-4'>LEARN MORE</button>
        </div>
    </div>
  )
}

export default NewsCard