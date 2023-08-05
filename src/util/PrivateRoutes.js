import { Outlet, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PrivateRoutes = () => {
    const isUserSignedIn = useSelector((state) => state.isUserSignedIn);

    return (
        isUserSignedIn ? <Outlet /> : <Navigate to="/login" />
    )
}

export default PrivateRoutes;
