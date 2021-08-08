import React from "react";

const index = (Com: React.ComponentType<any>) => {
    const wrapper = (props: any) => {
        return <Com
            {...props}
        />
    }
    return wrapper
}

export default index
