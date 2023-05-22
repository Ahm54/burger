function MenuItem(image, name, content, price) {
    return (<div className="menuItem">
        <div style={{ backgroundImage: `url(${image})` }}>
            <h1 style={{ marginBottom: '10px' }}>{name}</h1>
            <h6  style={{ marginTop: '0px' }}>{content}</h6>
            <p> 
                <i  style={{color: 'red' }}>
                {price} ₺
                </i>
            </p>
        </div>
    </div>);
}

export default MenuItem;
