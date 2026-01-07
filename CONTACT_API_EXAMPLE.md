# Contact API - Frontend Integration Example

## Basic Usage

```typescript
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  
  try {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: 'Jane Doe',
        email: 'jane@example.com',
        company: 'Academy Name', // optional
        message: 'Your message here',
        website: '', // honeypot - leave empty
      }),
    });
    
    const data = await response.json();
    
    if (data.ok) {
      console.log('Success!');
    } else {
      console.error('Error:', data.error);
      if (data.fields) {
        console.error('Validation errors:', data.fields);
      }
    }
  } catch (error) {
    console.error('Network error:', error);
  }
};
```

## Handling Responses

### Success Response
```json
{
  "ok": true
}
```

### Validation Error
```json
{
  "ok": false,
  "error": "validation_error",
  "fields": {
    "email": "Invalid email format",
    "message": "Message must be between 10 and 2000 characters"
  }
}
```

### Rate Limited
```json
{
  "ok": false,
  "error": "rate_limited"
}
```

### Server Error
```json
{
  "ok": false,
  "error": "server_error"
}
```

## Example with Error Handling

```typescript
const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
const [errorMessage, setErrorMessage] = useState<string>('');

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setStatus('loading');
  setErrorMessage('');
  
  try {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        company: formData.company || undefined,
        message: formData.message,
        website: formData.website, // honeypot
      }),
    });
    
    const data = await response.json();
    
    if (data.ok) {
      setStatus('success');
      // Reset form
    } else {
      setStatus('error');
      if (data.fields) {
        const firstError = Object.values(data.fields)[0] as string;
        setErrorMessage(firstError);
      } else if (data.error === 'rate_limited') {
        setErrorMessage('Too many requests. Please try again later.');
      } else {
        setErrorMessage('Something went wrong. Please try again.');
      }
    }
  } catch (error) {
    setStatus('error');
    setErrorMessage('Network error. Please check your connection.');
  }
};
```

