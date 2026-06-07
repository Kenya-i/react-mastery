import React, { useEffect, useState } from 'react'

export const UserDetail = () => {
    const [user, setUser] = useState();
    const [userId, setUserId] = useState(1);

    const [product, setProduct] = useState();
    const [productId, setProductId] = useState(1);

    useEffect(() => {
        fetch(`https://dummyjson.com/users/${userId}`)
        .then(res => res.json())
        .then(date => setUser(date));
    }, [userId]);

    useEffect(() => {
        fetch(`https://dummyjson.com/products/${productId}`)
        .then(res => res.json())
        .then(date => setProduct(date));
    }, [productId]);

  return (
    <div>
        <p>
            {user?.firstName ?? "データ取得中..."}
        </p>
        <div>
            <input type="number" value={userId} onChange={(e) => setUserId(e.target.value)}/>
        </div>
        <p>
            {product?.title ?? "データ取得中..."}
        </p>
        <div>
            <input type="number" value={productId} onChange={(e) => setProductId(e.target.value)}/>
        </div>
    </div>
  )
}
