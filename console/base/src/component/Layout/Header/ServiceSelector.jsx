import React from "react";

import {CDropdown, CDropdownToggle, CDropdownMenu, CDropdownItem} from '@coreui/react'
import CIcon from '@coreui/icons-react'

export const ServiceSelector = () => {
    return (
        <CDropdown
            inNav
            className="c-header-nav-item mx-2"
            direction="down"
        >
            <CDropdownToggle className="c-header-nav-link" caret={true}>
                <CIcon name="cil-envelope-open" />
                Service
            </CDropdownToggle>
            <CDropdownMenu className="pt-0" placement="bottom-end">
                <CDropdownItem
                    header
                    tag="div"
                    color="light"
                >
                    <strong>select service</strong>
                </CDropdownItem>
                {
                    items.map((item) => {
                        return (
                            <CDropdownItem href={`/service?service=${item.name}`} key={item.id}>
                                <div className="message">
                                    <div className="text-truncate font-weight-bold">
                                        <span className="fa fa-exclamation text-danger"></span> {item.name}
                                    </div>
                                    <div className="small text-muted text-truncate">
                                        {item.desc}
                                    </div>
                                </div>
                            </CDropdownItem>
                        );
                    })
                }
                <CDropdownItem href="/home" className="text-center border-top"><strong>View all Services</strong></CDropdownItem>
            </CDropdownMenu>
        </CDropdown>
    )
};

// api 구현 후 대체
const items = [
    {
        id: 0
        , name: 'news'
        , desc: '네이버 뉴스 서비스,,,'
    }
    , {
        id: 1
        , name: 'sports'
        , desc: '네이버 스포츠 서비스,,,'
    }
    , {
        id: 2
        , name: 'tvcast'
        , desc: '네이버 TV 서비스'
    }
];