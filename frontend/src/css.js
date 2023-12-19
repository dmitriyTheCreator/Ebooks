export const styles = {
    appBar: {		
        backgroundColor: "##0000FF",
        height: "50px",
        '& .MuiToolbar-regular': {
            minHeight: "50px"
        }		
    },
    name: {
        marginRight: "30px"
    },
    link: {
        textTransform: "unset",
        color: "#FFFFFF",
        margin: "0 25px",
        textDecoration: "unset"
    },
    form: {
        marginLeft: "25px"
    },
    textField: {
        margin: "15px 0"
    },
    detail: {
        margin: "40px 0"
    },
    edit: {
        backgroundColor: "#FF0000",
        borderRadius: "7px",
        textDecoration: "none",
        fontSize: "16px",
        fontWeight: "bold",
        color: "white",
		padding: "7px 9px",
		margin: "15px 0px"
		
    },
    delete: {
        backgroundColor: "#FF0000",
        "&:hover": {
            backgroundColor: "#DD4145",
            opacity: 0.8
        }
    },
    update: {
        backgroundColor: "#64A845",
        "&:hover": {
            backgroundColor: "#64A845",
            opacity: 0.8
        }
    },
    buttonWrapper: {
        marginTop: "20px"
    },
    button: {
        marginRight: "15px",
        color: "white",
        fontSize: "13px",
        textTransform: "none",
        height: "25px"
    },
    removeAll: {
		fontSize: "16px",
        marginTop: "30px",
		padding: "20px 20px",
		backgroundColor: "#000000"
    },
    book: {
        marginLeft: "0px",
		marginRight: "50px"
    }
};
