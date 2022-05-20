import { render, screen } from '@testing-library/react'
import About from '../pages/about' 

test('renders a message',()=>{
const {container, getByText}=render(<About/>)
expect(getByText('Test')).toBeInTheDocument();
expect(container.firstChild).toMatchInlineSnapshot(`
<p>
  Test
</p>
`)

})