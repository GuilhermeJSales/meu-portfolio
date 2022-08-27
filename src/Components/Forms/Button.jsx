import {ButtonForm} from '../../styles'

export const Button = ({children, to, ...props}) => {
  return (
    <ButtonForm to={to} {...props}>{children}</ButtonForm>

  )
}