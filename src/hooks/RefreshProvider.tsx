import React, { useState } from 'react'
const RefreshContext = React.createContext({})

function RefreshProvider(props: any) {
    const [refreshing, setrefreshing] = useState(false)
    return <RefreshContext.Provider value={{ refreshing, setrefreshing }} {...props} />
}

const useRefresh = () => React.useContext(RefreshContext)
export { RefreshProvider, useRefresh }

