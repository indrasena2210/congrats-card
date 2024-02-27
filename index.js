const element = (
  // Write your code here.
  <div className='bg-container'>
    <h1 className='heading'>Congratulations</h1>
    <div className='congrats-card'>
      <div>
        <img
          src='https://assets.ccbp.in/frontend/react-js/congrats-card-profile-img.png'
          className='profile-img'
        />
      </div>
      <h2 className='name'>Kiran V</h2>
      <p className='location'>
        Vishnu Institute of Computer Education and Technology, Bhimavaram
      </p>
      <img
        src='https://assets.ccbp.in/frontend/react-js/congrats-card-watch-img.png'
        className='watch'
      />
    </div>
  </div>
)

ReactDOM.render(element, document.getElementById('root'))
