import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Gift, Lock, Unlock } from 'lucide-react';

const BirthdayRiddle = () => {
  const [password, setPassword] = useState('');
  const [showSecret, setShowSecret] = useState(false);
  const [error, setError] = useState(false);
  
  const correctPassword = 'spielberg';
  const secretMessage = 'Congratulations! Your secret code is: 187';
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (password.toLowerCase() === correctPassword.toLowerCase()) {
      setShowSecret(true);
      setError(false);
    } else {
      setError(true);
      setShowSecret(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-blue-100 to-blue-200 p-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-center flex items-center justify-center gap-2">
            <Gift className="h-6 w-6" />
            Birthday Riddle
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="mb-6 text-center space-y-4">
            <p className="italic">
              I'm the master of stories, both thrilling and grand,<br />
              With an archaeologist searching for treasure so planned.<br />
              From dinosaurs roaring to E.T. in flight,<br />
              I bring magic and wonder to cinema's night.
            </p>
            <p className="italic">
              What's my last name, the legend you see,<br />
              Behind tales of adventure and mystery?
            </p>
            <p className="font-medium mt-2">
              Who am I?
            </p>
          </div>
          
          {!showSecret ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <label className="block text-sm font-medium">
                  Enter your answer:
                </label>
                <Input
                  type="text"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter the answer..."
                  className="w-full"
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full flex items-center justify-center gap-2"
              >
                <Lock className="h-4 w-4" />
                Check Answer
              </Button>

              {error && (
                <Alert variant="destructive">
                  <AlertDescription>
                    Incorrect answer. Try again!
                  </AlertDescription>
                </Alert>
              )}
            </form>
          ) : (
            <div className="space-y-4">
              <Alert className="bg-green-50 border-green-200">
                <Unlock className="h-4 w-4" />
                <AlertDescription className="mt-2">
                  {secretMessage}
                </AlertDescription>
              </Alert>
              <Button 
                onClick={() => {
                  setShowSecret(false);
                  setPassword('');
                }}
                variant="outline"
                className="w-full"
              >
                Try again
              </Button>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default BirthdayRiddle;