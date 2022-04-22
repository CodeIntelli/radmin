import PropTypes from 'prop-types';
import { useState } from 'react';
// @mui
import { Box, Grid, Card, Button, Typography } from '@mui/material';
// redux
// import { useDispatch, useSelector } from '../../../../redux/store';
// import { onBackStep, onNextStep, createBilling } from '../../../../redux/slices/product';
// _mock_
import { _addressBooks } from '../../../../_mock';
// components
import Label from '../../../../components/Label';
import Iconify from '../../../../components/Iconify';
//
import CheckoutSummary from './CheckoutSummary';
import CheckoutNewAddressForm from './CheckoutNewAddressForm';

// ----------------------------------------------------------------------

export default function CheckoutBillingAddress() {
  //
  // const dispatch = useDispatch();
  // const { checkout } = useSelector((state) => state.product);
  // const { total, discount, subtotal } = checkout;
  //
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleNextStep = () => {
    // dispatch(onNextStep());
  };

  const handleBackStep = () => {
    // dispatch(onBackStep());
  };

  const handleCreateBilling = (value) => {
    // dispatch(createBilling(value));
  };

  const addressData = [
    {
      id: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b1',
      receiver: 'Jayvion Simon',
      fullAddress: '19034 Verna Unions Apt. 164 - Honolulu, RI / 87535',
      phone: '365-374-4961',
      addressType: 'Home',
      isDefault: true,
    },
    {
      id: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d5247b1',
      receiver: 'Jayvion Simon',
      fullAddress: '19034 Verna  Apt. 164 - , RI / 87535',
      phone: '365-374-4961',
      addressType: 'Home',
      isDefault: true,
    },
    {
      id: 'e99f09a7-dd88-49d5-b1c8-1daf80c2422d7b1',
      receiver: 'Jayvion Simon',
      fullAddress: '19034 Verna  Apt. 164 - Honolulu, RI / 87535',
      phone: '365-3761',
      addressType: 'Home',
      isDefault: true,
    },
    {
      id: 'e99f09a7-dd88-49d5-b1c8-1daf80c22424d7b1',
      receiver: 'Jayvion Simon',
      fullAddress: '1na Unions Apt. 164 - Honolulu, RI / 87535',
      phone: '365-374-4961',
      addressType: 'Home',
      isDefault: true,
    },
    {
      id: 'e99f09a7-dd88-49d5-b1c8-1daf802424c2d7b1',
      receiver: 'Jayvion Simon',
      fullAddress: '19034 Verna Apt. 164 - , RI / 87535',
      phone: '365-374-4961',
      addressType: 'Home',
      isDefault: true,
    },
  ];

  return (
    <>
      <Grid container spacing={3}>
        <Grid item xs={12} md={8}>
          {addressData.map((address, index) => (
            <AddressItem
              key={index}
              address={address}
              onNextStep={handleNextStep}
              onCreateBilling={handleCreateBilling}
            />
          ))}
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Button
              size="small"
              color="inherit"
              onClick={handleBackStep}
              startIcon={<Iconify icon={'eva:arrow-ios-back-fill'} />}
            >
              Back
            </Button>
            <Button size="small" onClick={handleClickOpen} startIcon={<Iconify icon={'eva:plus-fill'} />}>
              Add new address
            </Button>
          </Box>
        </Grid>

        <Grid item xs={12} md={4}>
          <CheckoutSummary subtotal={61500} total={1500} discount={12} />
        </Grid>
      </Grid>

      <CheckoutNewAddressForm
        open={open}
        onClose={handleClose}
        onNextStep={handleNextStep}
        onCreateBilling={handleCreateBilling}
      />
    </>
  );
}

// ----------------------------------------------------------------------

AddressItem.propTypes = {
  address: PropTypes.object,
  onNextStep: PropTypes.func,
  onCreateBilling: PropTypes.func,
};

function AddressItem({ address, onNextStep, onCreateBilling }) {
  const { receiver, fullAddress, addressType, phone, isDefault } = address;

  const handleCreateBilling = () => {
    onCreateBilling(address);
    onNextStep();
  };

  return (
    <Card sx={{ p: 3, mb: 3, position: 'relative' }}>
      <Box sx={{ mb: 1, display: 'flex', alignItems: 'center' }}>
        <Typography variant="subtitle1">{receiver}</Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          &nbsp;({addressType})
        </Typography>
        {isDefault && (
          <Label color="info" sx={{ ml: 1 }}>
            Default
          </Label>
        )}
      </Box>
      <Typography variant="body2" gutterBottom>
        {fullAddress}
      </Typography>
      <Typography variant="body2" sx={{ color: 'text.secondary' }}>
        {phone}
      </Typography>

      <Box
        sx={{
          mt: 3,
          display: 'flex',
          position: { sm: 'absolute' },
          right: { sm: 24 },
          bottom: { sm: 24 },
        }}
      >
        {!isDefault && (
          <Button variant="outlined" size="small" color="inherit">
            Delete
          </Button>
        )}
        <Box sx={{ mx: 0.5 }} />
        <Button variant="outlined" size="small" onClick={handleCreateBilling}>
          Deliver to this Address
        </Button>
      </Box>
    </Card>
  );
}
