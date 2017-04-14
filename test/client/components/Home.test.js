import test from 'tape'
import React from 'react'
import { shallow, mount } from 'enzyme'

import Header from '../../../client/components/Home.jsx'

 test('shallow', t => {
   const wrapper = shallow(<Home />)
   t.equal(wrapper.contains(<p>Home Test</p>), true)
   t.end()
 })
