import React from "react";
import Page from '../components/page'
import {BaseProps} from "../components/types";
import styled from 'styled-components';

function Home(p: BaseProps) {
  const {className} = p
  return (
    <Page className={className}>
    </Page>
  )
}

export default React.memo(styled(Home)`
  
`)
