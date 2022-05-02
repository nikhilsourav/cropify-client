import { makeStyles } from '@mui/styles';

export default makeStyles((theme) => ({
  HeadingContainer: {
    position: 'relative',
    marginBottom: theme.spacing(5),
  },

  DelIconContainer: {
    position: 'absolute',
    right: '-5%',
    top: '-10%',
  },

  ModalContainer: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 350,
    height: 200,
    maxWidth: 350,
    maxHeight: 200,
    backgroundColor: 'white',
    padding: theme.spacing(2),
  },

  ModalClose: {
    position: 'absolute',
    right: '3%',
  },

  ModalInfo: {
    width: 300,
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  },
}));
