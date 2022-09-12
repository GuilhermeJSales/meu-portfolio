import {ButtonForm} from '../../styles'

export const Button = ({children, to}) => {
  return (
    <ButtonForm to={to}>{children}</ButtonForm>

  )
}