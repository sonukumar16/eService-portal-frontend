export const Form = props => {
    const {
      values: { name, email, password, confirmPassword },
      errors,
      touched,
      handleChange,
      isValid,
      setFieldTouched
    } = props;
   
    const change = (name, e) => {
      e.persist();
      handleChange(e);
      setFieldTouched(name, true, false);
    };
    return (
      <form
        onSubmit={() => {
          alert("submitted");
        }}
      >
       
        <TextField
          id="email"
          name="email"
          helperText={touched.email ? errors.email : ""}
          error={touched.email && Boolean(errors.email)}
          label="Email"
          fullWidth
          value={email}
          onChange={change.bind(null, "email")}
   
        />
        <TextField
          id="password"
          name="password"
          helperText={touched.password ? errors.password : ""}
          error={touched.password && Boolean(errors.password)}
          label="Password"
          fullWidth
          type="password"
          value={password}
          onChange={change.bind(null, "password")}
   
        />
        <Button
          type="submit"
          fullWidth
          variant="raised"
          color="primary"
          disabled={!isValid}
        >
          Submit
        </Button>
      </form>
    );
   };