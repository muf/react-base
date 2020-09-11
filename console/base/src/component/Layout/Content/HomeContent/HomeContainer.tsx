import React from 'react';
import {CBadge, CButton, CCard, CCardBody, CCardHeader, CCol, CDataTable, CForm, CInput, CRow, CJumbotron} from '@coreui/react'

export const HomeContainer = () => {
  return (
      <>
          <ServiceSearchContainer />
          <ServiceTableContainer />
      </>
  )
};

const ServiceSearchContainer = () => {
    return (
        <CCol xs="12" lg="12">
            <CCard>
                <CCardBody>
                    <CJumbotron className="border">
                        <h1 className="display-3">CBOX Console</h1>
                        <p className="lead">네이버 댓글 연동을 위한 콘솔 어드민 페이지.</p>
                        <hr className="my-2" />
                        <p>블라블라블라</p>
                        <p className="#">
                            <CButton color="primary" size="lg">Learn More</CButton>
                        </p>
                    </CJumbotron>
                </CCardBody>
            </CCard>
        </CCol>
    )
};

const ServiceTableContainer = () => {
    const getBadge = (status: string) => {
        switch (status) {
            case 'Active': return 'success';
            case 'Inactive': return 'secondary';
            case 'Pending': return 'warning';
            case 'Banned': return 'danger';
            default: return 'primary';
        }
    };
    return <ServiceTablePresenter
        items={usersData}
        fields={fields}
        getBadge={getBadge}
    />
};

const ServiceTablePresenter = (props: {items:any, fields:any, getBadge: Function}) => {
    return <CRow>
        <CCol xs="12" lg="12">
            <CCard>
                <CCardHeader>
                    <CForm>
                        <CRow>
                            <CCol xs="6">
                                <CInput
                                    className="mr-sm-2"
                                    placeholder="Search"
                                    size="md"
                                />
                            </CCol>
                            <CCol sm="4">
                                <CButton color="outline-success" className="my-2 my-sm-0" type="submit">Search</CButton>
                            </CCol>
                        </CRow>
                    </CForm>
                </CCardHeader>
                <CCardBody>
                    <CCard>
                        <CCardHeader>
                            서비스 목록
                        </CCardHeader>
                        <CCardBody>
                            <CDataTable
                                items={usersData}
                                fields={fields}
                                striped
                                itemsPerPage={5}
                                pagination
                                scopedSlots = {{
                                    'status':
                                        (item: {status: string})=>(
                                            <td>
                                                <CBadge color={props.getBadge(item.status)}>
                                                    {item.status}
                                                </CBadge>
                                            </td>
                                        )

                                }}
                            />
                        </CCardBody>
                    </CCard>
                </CCardBody>
            </CCard>
        </CCol>
    </CRow>

};


const fields = ['서비스', 'registered', 'status'];
const usersData = [
    {id: 0, 서비스: 'news', registered: '2018/01/01', role: 'Guest', status: 'Pending'},
    {id: 1, 서비스: 'sports', registered: '2018/01/01', role: 'Member', status: 'Active'},
    {id: 2, 서비스: 'webtoon', registered: '2018/02/01', role: 'Staff', status: 'Banned'},
    {id: 3, 서비스: 'tvcast', registered: '2018/02/01', role: 'Admin', status: 'Inactive'},
    {id: 4, 서비스: 'vlive', registered: '2018/03/01', role: 'Member', status: 'Pending'},
    {id: 5, 서비스: 'news', registered: '2018/01/01', role: 'Guest', status: 'Pending'},
    {id: 6, 서비스: 'sports', registered: '2018/01/01', role: 'Member', status: 'Active'},
    {id: 7, 서비스: 'webtoon', registered: '2018/02/01', role: 'Staff', status: 'Banned'},
    {id: 8, 서비스: 'tvcast', registered: '2018/02/01', role: 'Admin', status: 'Inactive'},
    {id: 9, 서비스: 'vlive', registered: '2018/03/01', role: 'Member', status: 'Pending'},
    {id: 10, 서비스: 'news', registered: '2018/01/01', role: 'Guest', status: 'Pending'},
    {id: 11, 서비스: 'sports', registered: '2018/01/01', role: 'Member', status: 'Active'},
    {id: 12, 서비스: 'webtoon', registered: '2018/02/01', role: 'Staff', status: 'Banned'},
    {id: 13, 서비스: 'tvcast', registered: '2018/02/01', role: 'Admin', status: 'Inactive'},
    {id: 14, 서비스: 'vlive', registered: '2018/03/01', role: 'Member', status: 'Pending'},
    {id: 15, 서비스: 'news', registered: '2018/01/01', role: 'Guest', status: 'Pending'},
    {id: 16, 서비스: 'sports', registered: '2018/01/01', role: 'Member', status: 'Active'},
    {id: 17, 서비스: 'webtoon', registered: '2018/02/01', role: 'Staff', status: 'Banned'},
    {id: 18, 서비스: 'tvcast', registered: '2018/02/01', role: 'Admin', status: 'Inactive'},
    {id: 19, 서비스: 'vlive', registered: '2018/03/01', role: 'Member', status: 'Pending'}
];