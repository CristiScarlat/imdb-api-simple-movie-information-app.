import { Children, useEffect, useState } from 'react';
import { Pagination } from 'react-bootstrap';

const PaginatedList = ({
  children,
  pageSize = 10,
  listContainerClassName,
  lisPaginationClassName
}: any) => {
  const [pageNo, setPageNo] = useState<number>(0);
  const [pageContent, setPageContent] = useState(null);
  const total = Children.count(children);

  useEffect(() => {
    if (total > pageSize) {
      const temp = Children.toArray(children).slice(
        pageNo * pageSize,
        pageNo * pageSize + pageSize
      );
      //@ts-ignore
      setPageContent(temp);
    }
  }, [pageNo]);

  const handlePrevPage = () => {
    if (pageNo > 0) setPageNo((state: any) => state - 1);
  };

  const handleNextPage = () => {
    if ((pageNo + 1) * pageSize < total) setPageNo((state: any) => state + 1);
  };

  return (
    <>
      <div className={listContainerClassName}>
        {total > pageSize ? pageContent : children}
      </div>
      {total > pageSize && (
        <div className={lisPaginationClassName}>
          <Pagination style={{ margin: 0 }}>
            <Pagination.Prev onClick={handlePrevPage} />
            <Pagination.Item>{`${pageNo + 1}/${total}`}</Pagination.Item>
            <Pagination.Next onClick={handleNextPage} />
          </Pagination>
        </div>
      )}
    </>
  );
};

export default PaginatedList;
