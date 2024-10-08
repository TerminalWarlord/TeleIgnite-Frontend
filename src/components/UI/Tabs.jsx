import { Fragment } from "react"

const Tabs = ({ tabContent }) => {
    // const tabContent = [
    //     {
    //         tabName: 'Reviews',
    //         content: <p>Hello 1</p>,
    //         checked: true,
    //     },
    //     {
    //         tabName: 'Contents',
    //         content: <p>Hello 2</p>,
    //         checked: false,
    //     },
    // ]
    return (
        <div role="tablist" className="tabs tabs-lifted w-11/12">
            {tabContent.map(tab => {
                return <Fragment key={tab.tabName}><input type="radio" name="my_tabs_4" role="tab" className="tab" aria-label={tab.tabName} defaultChecked={tab.checked} />
                    <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
                        {tab.content}
                    </div>
                </Fragment>
            })}
        </div >
    )
}

export default Tabs