from flamapy.core.discover import DiscoverMetamodels # This loads the tool in the python execution environment
dm = DiscoverMetamodels() # Instantiate the class
#result = dm.use_operation_from_file("Products", "./tutorial-splc22/models/pizzas/pizzas.fide") # This launch the operation and stores the result on the result variable
result = dm.use_operation_from_file("ValidProduct", "./tutorial-splc22/models/pizzas/pizzas.fide",configuration_file="./tutorial-splc22/models/pizzas_nonvalid.csvconf"  ) # This launch the operation and stores the result on the result variable
print(result) # to print the result
