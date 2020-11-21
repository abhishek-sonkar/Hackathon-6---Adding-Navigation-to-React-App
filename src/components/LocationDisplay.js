import React from 'react';
export default function LocationDisplay() {
    return (<div>{
        function usePageViews() {
            let location = useLocation();
            React.useEffect(() => {
              ga.send(["pageview", location.pathname]);
            }, [location]);
          }
          }</div>);
}