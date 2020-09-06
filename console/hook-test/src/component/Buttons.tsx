import React from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow
} from '@coreui/react'
import '../css/all.css'

export const Buttons = () => {
  return (
    <>
      <CCard>
        <CCardHeader>
          Standard Buttons
        </CCardHeader>
        <CCardBody>
          <CRow className="align-items-center">
            {/* @ts-ignore */}
            <CCol xl className="mb-3 mb-xl-0">
              Normal
            </CCol>
            <CCol sm="4" md="2" xl className="mb-3 mb-xl-0">
              <CButton block color="primary">Primary</CButton>
            </CCol>
          </CRow>
        </CCardBody>
      </CCard>
    </>
  )
}
