import { screen } from '@testing-library/react'
import { render } from '@testing-library/react'
import Profile from '../../components/Profile/Profile'

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

test('Should render the user profile', () => {
  render(<Profile user={user} />)
  screen.findByText('Vonta')
  screen.findByText('Res Non Verba')
  screen.findByText('Interests')
  screen.findByText('React')
  screen.getByAltText('avatar')
  screen.getByAltText('header')
})
