import React from 'react'
import {LabelGroup, Label} from '..'
import {behavesAsComponent, checkExports} from '../utils/testing'
import {render as HTMLRender} from '@testing-library/react'
import {axe, toHaveNoViolations} from 'jest-axe'

expect.extend(toHaveNoViolations)

const comp = (
  <LabelGroup>
    <Label>Default label</Label>
    <Label>Darker gray label</Label>
  </LabelGroup>
)

describe('LabelGroup', () => {
  behavesAsComponent({Component: LabelGroup})

  checkExports('LabelGroup', {
    default: LabelGroup,
  })

  it('should have no axe violations', async () => {
    const {container} = HTMLRender(comp)
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })
})
