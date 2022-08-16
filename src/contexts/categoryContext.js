import { createContext, useContext, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectCurrentUser } from '../store/slices/authSlice';
import {
    selectAllCategories,
    selectStatusCats,
    // selectErrorMessage,
    fetchCategories,
    addNewCategory,
} from '../store/slices/categorySlice';
import AuthContext from './authContext';

export const CategoryContext = createContext();

const CategoryContextProvider = (props) => {
    const dispatch = useDispatch();
    const { authToken } = useContext(AuthContext);
    const currUser = useSelector(selectCurrentUser);

    const allCategories = useSelector(selectAllCategories);
    const statusCats = useSelector(selectStatusCats);
    // const errorMessage = useSelector(selectErrorMessage);

    const [categories, setCategories] = useState([]);
    const [accessToken, setAccessToken] = useState(authToken);
    useEffect(() => {
        if (statusCats !== 'succeeded') {
            dispatch(fetchCategories());
        }
    }, [statusCats, dispatch, allCategories]);

    useEffect(() => {
        if (allCategories) {
            setCategories(allCategories);
        }
    }, [allCategories]);

    useEffect(() => {
        if (!authToken && currUser) {
            setAccessToken(currUser.accessToken);
        }
    }, [currUser, authToken]);

    useEffect(() => {
        setCategories(JSON.parse(localStorage.getItem('categories')));
    }, []);

    useEffect(() => {
        localStorage.setItem('categories', JSON.stringify(categories));
    });

    const sortedCategories = categories;

    const addCategory = (CatName) => {
        setCategories([...categories, { CatID: categories.length + 1, CatName }]);
        console.log(categories);
        dispatch(addNewCategory({ accessToken: authToken, newCategory: { CatID: categories.length + 1, CatName: CatName } }));
    };

    const deleteCategory = (id) => {
        setCategories(categories.filter((Category) => Category.id !== id));
    };

    const updateCategory = (id, updatedCategory) => {
        setCategories(categories.map((Category) => (Category.id === id ? updatedCategory : Category)));
    };

    return (
        <CategoryContext.Provider value={{ sortedCategories, addCategory, deleteCategory, updateCategory }}>
            {props.children}
        </CategoryContext.Provider>
    );
};

export default CategoryContextProvider;
