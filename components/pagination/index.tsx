

import RcPagination from 'rc-pagination';
import React, { FC } from 'react';

interface IPagination {
    onChange: any,
    total: number,
    pageSize?: number,
    activePage?: number,
}

const Pagination: FC<IPagination> = ({ onChange, total, pageSize, activePage }) => {

    return (
        <RcPagination
            onChange={onChange}
            showTitle={false}
            showLessItems
            total={total}
            pageSize={pageSize}
            defaultPageSize={12}
            current={activePage}
            onShowSizeChange={onChange}
        />
    )
}

export default Pagination;