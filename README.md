# inspire
### breate easy
> a smart incentive spirometer

## API
### Filters
> Every endpoint can be filtered by each model param: {DESC, ASC}
```javascript
//req.params.query
var query = {
    limit: 10,
    skip: 10,
    sort: 'createdAt DESC', // modelParam | {'DESC', 'ASC'}
    filter:{
    	obj: param
    }
};
```

### Models | Endpoints
#### Entry
> This is the Entry Model
```javascript
var entryModel = {

};
```
#### Member
> This is the Member Model
```javascript
var memberModel = {

};