import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../contexts/AuthContext'
import { ActiveButton, Button, ButtonWrapper, HeaderContainer } from './style'
import { useNavigation } from '../../contexts/NavigationContext'

export function Header() {
  const { signOut } = useAuth()
  const navigate = useNavigate()
  const { setLocation, currentLocation } = useNavigation()

  return (
    <HeaderContainer>
      <ButtonWrapper>
        {currentLocation === 'HOME' ? (
          <ActiveButton
            onClick={() => {
              setLocation('HOME')
              navigate('/')
            }}
          >
            HOME
          </ActiveButton>
        ) : (
          <Button
            onClick={() => {
              setLocation('HOME')
              navigate('/')
            }}
          >
            HOME
          </Button>
        )}
      </ButtonWrapper>
      {/* <ButtonWrapper>
        {currentLocation === 'CHATS' ? (
          <ActiveButton
            onClick={() => {
              setLocation('CHATS')
              navigate('/chats')
            }}
          >
            CHATS
          </ActiveButton>
        ) : (
          <Button
            onClick={() => {
              setLocation('CHATS')
              navigate('/chats')
            }}
          >
            CHATS
          </Button>
        )}
      </ButtonWrapper> */}
      <ButtonWrapper>
        {currentLocation === 'ABOUT' ? (
          <ActiveButton
            onClick={() => {
              setLocation('ABOUT')
              navigate('/about')
            }}
          >
            SOBRE
          </ActiveButton>
        ) : (
          <Button
            onClick={() => {
              setLocation('ABOUT')
              navigate('/about')
            }}
          >
            SOBRE
          </Button>
        )}
      </ButtonWrapper>
      <ButtonWrapper>
        <Button onClick={signOut}>SAIR</Button>
      </ButtonWrapper>
    </HeaderContainer>
  )
}