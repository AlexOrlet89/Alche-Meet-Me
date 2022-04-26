import { screen } from '@testing-library/react'
import Header from './components/layout/Header'
import './components/layout/Header.css'

const { render } = require('@testing-library/react')

const user = {
  id: 1,
  created_at: '2021-12-13T00:17:29+00:00',
  name: 'Vonta',
  avatar: 'https://thumbs.gfycat.com/NiceRequiredGrunion-size_restricted.gif',
  header: 'https://static.wikia.nocookie.net/naruto/images/5/50/Team_Kakashi.png',
  likes: ['React', 'Anime', 'Traveling', 'Living', 'Tower Defense Games', 'Card Games'],
  motto: 'Res Non Verba',
  color: 'crimson',
}

test('Should render the header', async () => {
  // renders the component we are testing
  render(<Header user={user} />)

  //   const element = screen.getByAltText('Alchemy Logo')
  //   const styles = getComputedStyle(element)

  //   actual tests
  screen.debug()
  screen.getByAltText('Alchemy Logo')
  //   expect(styles.backgroundColor).toBe('red')
  screen.findByText('Meet Vonta!')
})
