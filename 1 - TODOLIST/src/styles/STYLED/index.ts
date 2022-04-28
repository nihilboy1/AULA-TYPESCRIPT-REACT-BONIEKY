import styled from 'styled-components'

type LabelProps = {
  done: boolean
}

export const LabelComponent = styled.label(
  ({ done }: LabelProps) => `
  text-decoration: ${done ? 'line-through' : 'initial'}
`
)
