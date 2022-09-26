import {ReactComponent as Load} from '../../Assets/tail-spin.svg'
import styled from 'styled-components'

const DivLoad = styled.div`
  width:100%;
  height:100%;
  text-align:center;
  margin:0 auto;
`

export const Loading = () => {
  return (
    <DivLoad>
      <Load/>
    </DivLoad>
  )
} 